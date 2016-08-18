defmodule LindaProblem do
  use Xee.ThemeScript
  require Logger

  @page ["waiting", "experiment", "result"]

  # Callbacks
  def script_type do
    :message
  end

  def install, do: nil

  def init do
    {:ok, %{"data" => %{
       page: "waiting",
       participants: %{},
       answer_log: [],
       ans_programmer: 0,
       ans_banker: 0,
       ans_each: 0,
     }}}
  end

  def new_participant() do
    %{
      status: nil,
    }
  end

  def join(%{participants: participants} = data, id) do
    Logger.debug "Joined"
    if not Map.has_key?(participants, id) do
      participant = new_participant()
      participants = Map.put(participants, id, participant)
      data = %{data | participants: participants}
      action = %{
        type: "ADD_USER",
        id: id,
        users: participants,
      }
      {:ok, %{"data" => data, "host" => %{action: action}}}
    else
      {:ok, %{"data" => data}}
    end
  end

  def handle_received(data, %{"action" => "fetch contents", "params" => params}) do
    action = Map.merge(%{type: "FETCH_CONTENTS"}, data)
    {:ok, %{"data" => data, "host" => %{action: action}}}
  end

  def handle_received(data, %{"action" => "change page", "params" => params}) do
    data = %{data | page: params}
    action = %{
      type: "CHANGE_PAGE",
      page: data.page,
    }
    participants = dispatch_to_all(data.participants, action)
    {:ok, %{"data" => data, "host" => %{action: action}, "participant" => participants}}
  end

  def handle_received(data, %{"action" => "fetch contents"}, id) do
     action = %{
       type: "FETCH_CONTENTS",
       page: data.page,
       status: data.participants[id].status,
     }
     {:ok, %{"data" => data, "participant" => %{id => %{action: action}}}}
  end

  def handle_received(data, %{"action" => "submit answer", "params" => params}, id) do
    data = put_in(data.participants[id].status, params)
    action = %{
      type: "SUBMIT_ANSWER",
      status: data.participants[id].status,
    }
    {:ok, %{"data" => data, "participant" => %{id => %{action: action}}}}
  end

  def handle_received(data, _action, _id) do
    {:ok, %{"data" => data}}
  end

  def dispatch_to_all(participants, action) , do: Enum.map(participants, fn {id, _} ->
    {id, %{action: action}} end) |> Enum.into(%{})
end
