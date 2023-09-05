import { useEffect } from "react";
import { ToggleFlagAction } from "../contexts";

export default function useTurnOffFlag({ flag, flagName, dispatch }) {
    useEffect(() => {
        if (flag) {
            dispatch({
                type: ToggleFlagAction,
                flagName,
            });
        }
    }, [flag]);
}
