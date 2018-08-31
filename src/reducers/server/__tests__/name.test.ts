import { reduceServerName } from "@app/reducers/server/name";
import { messageCallbacks } from "@app/actions/messages";

describe(" server name", () => {
  test("without action", () => {
    expect(reduceServerName(undefined, { type: "" })).toMatchSnapshot();
  });

  test("with RPL_MYINFO received", () => {
    expect(
      reduceServerName(
        undefined,
        messageCallbacks["004"]("server1", "server", [
          "",
          "serverName",
          "version",
          "userModes",
          "channelModes",
        ]),
      ),
    ).toMatchSnapshot();
  });
});