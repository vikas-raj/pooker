export class DialogConfig {
  title?: string;
  contents?: DialogCDontent[];
  dialogForm?: GenericForm[];
  dialogFormValues?: any;
}

export class DialogCDontent {
  class?: string;
  contentName?: string;
  isPrimary?: string;
}

export interface GenericForm {
  name?: string;
  title?: string;
  type?: string;
  placeHolder?: string;
  class?: string;
  validators?: any[];
  options?: IOption[];
  dependentControl?: string;
}
export interface IOption{
  key: string;
  value: any;
  id?: string;
}
export class DialogResponse {
  eventType?: string;
  formValues?: any;
}
