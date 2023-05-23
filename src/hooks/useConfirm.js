import { useEffect, useState, useRef } from "react";
// 함수형 프로그래밍

export const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confrimAction = () => {
    if (alert(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
};
