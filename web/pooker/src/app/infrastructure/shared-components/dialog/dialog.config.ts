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

export class DialogForm {
  name?: string;
  title?: string;
  type?: string;
  placeHolder?: string;
  class?: string;
  validators?: any[];
}

export class DialogResponse {
  eventType?: string;
  formValues?: any;
}
