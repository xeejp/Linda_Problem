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
      answer: nil,
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

  def handle_received(data, %{"action" => action, "params" => params}) do
    Logger.debug "received"
    type = case {action, params} do
      {"fetch contects", _} -> %{type: "FETCH_CONTENTS"}
      {"change page", _} ->
        Logger.debug "change page"
        data = %{data | page: params}
        %{type: "CHANGE_PAGE"}
      _ -> %{}
    end
    {:ok, %{"data" => data, "host" => %{action: Map.merge(type, data)}}}
  end

  def handle_received(data, _action, _id) do
    {:ok, %{"data" => data}}
  end
end
