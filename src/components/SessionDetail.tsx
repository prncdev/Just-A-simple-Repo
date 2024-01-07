import { useEffect, useState } from "react";
import { BiteSession, getSessionDetail } from "../services/session-service";
import { EditSessionDetail } from "./EditSessionDetail";
import Loader from "./Loader";
import { ViewSessionDetail } from "./ViewSessionDetail";
import {
  Modal,
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
} from "@mui/material";

type Props = {
  id: number;
  // open: boolean;
  // onClose: () => void;
};


export const SessionDetail = ({ id }: Props) => {
  const [sessionDetail, setSessionDetail] = useState<BiteSession | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    loadSessionDetail(id);
  }, [id]);

  const loadSessionDetail = (id: number) => {
    setIsLoading(true);
    getSessionDetail(id, setSessionDetail, console.log);
    setIsLoading(false);
  };

  const handleSave = (details: BiteSession) => {
    console.log("handleSave: ", details);
  };

  return (
    <>
      {/* <div
        // open={open}
        // onClose={onClose}
        className="flex justify-center items-center font-mono"
      > */}
      <div>
        {sessionDetail ? (
          isEdit ? (
            <EditSessionDetail
              session={sessionDetail}
              onSaveClick={handleSave}
              onBackClick={console.log}
            />
          ) : (
            <ViewSessionDetail
              session={sessionDetail}
              onEditClick={() => setIsEdit(true)}
            />
          )
        ) : (
          <div>Select a bite seesion to see detail </div>
        )}
      </div>
      {/* </div> */}
      {/* {isLoading && <Loader />}
      {!!sessionDetail &&
        (!isEdit ? (
          <>
            <ViewSessionDetail
              session={sessionDetail}
              onEditClick={() => setIsEdit(true)}
            />
          </>
        ) : (
          <EditSessionDetail session={sessionDetail} onSaveClick={handleSave} />
        ))} */}
    </>
  );
};
