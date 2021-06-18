export class DialogConfig {
  title?: string;
  contents?: DialogCDontent[];
  dialofForm?: DialogForm[];
  dialogFormValues?: any;
}

export class DialogCDontent {
  class?: string;
  contentName?: string;
  isPrimary?: string;
}

export interface DialogForm {
  name?: string;
  title?: string;
  type?: string;
  placeHolder?: string;
  class?: string;
  validators?: any[];
  options?: IOption[];
}
export interface IOption{
  key: string;
  value: string;
}
export class DialogResponse {
  eventType?: string;
  formValues?: any;
}
