declare module 'cleave.js/react' {
  import { Component } from 'react';

  interface CleaveOptions {
    // Можно описать основные опции, или оставить как any
    prefix?: string;
    delimiters?: string[];
    blocks?: number[];
    numericOnly?: boolean;
    phone?: boolean;
    phoneRegionCode?: string;
    [key: string]: any;
  }

  interface CleaveProps {
    options: CleaveOptions;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    placeholder?: string;
  }

  export default class Cleave extends Component<CleaveProps> {}
}
