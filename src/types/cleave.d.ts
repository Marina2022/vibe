declare module 'cleave.js/react' {
  import { Component } from 'react';

  interface CleaveOptions {
    prefix?: string;
    delimiters?: string[];
    blocks?: number[];
    numericOnly?: boolean;
    phone?: boolean;
    phoneRegionCode?: string;
    // другие опции могут быть любого типа, безопасно через unknown
    [key: string]: unknown;
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
