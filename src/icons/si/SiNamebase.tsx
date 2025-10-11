

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiNamebase = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M23.0978 2.406c0 1.3288-1.0516 2.406-2.3488 2.406s-2.3487-1.0772-2.3487-2.406S19.4519 0 20.7491 0s2.3487 1.0772 2.3487 2.406zm-11.5089.5415C5.6868 2.9475.9022 7.8488.9022 13.8948V24h6.5764V13.8948c0-2.3254 1.8403-4.2105 4.1103-4.2105s4.1103 1.8851 4.1103 4.2105V24h6.5764V13.8948c0-6.046-4.7846-10.9473-10.6867-10.9473z" />
        </G>
      </Svg>
    );
  }

