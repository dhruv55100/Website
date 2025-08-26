export interface Phone {
  name: string;
  price: string;
  priceUSD: number;
  score: string;
  release: string;
  image: string;
  specs: Record<string, string>;
  camera: {
    main: string;
    ultra: string;
    tele?: string;
    tele1?: string;
    tele2?: string;
    front: string;
    features: string[];
  };
  performance: {
    cpu: string;
    gpu: string;
    antutu: string;
    geekbench: string;
  };
  battery: {
    capacity: string;
    charging: string;
    wireless: boolean;
    reverse: boolean;
    video: string;
    web: string;
    gaming: string;
  };
  features: string[];
}