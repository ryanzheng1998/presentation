declare module '*.png' {
    const content: any;
    export default content;
}

declare module '*.txt' {
    const content: string;
    export default content;
}

declare module "*.svg" {
    const content: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
    export default content;
  }