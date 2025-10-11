

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcShipped = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M43,36H29V14h10.6c0.9,0,1.6,0.6,1.9,1.4L45,26v8C45,35.1,44.1,36,43,36z" fill="#8BC34A" />
          <Path d="M29,36H5c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2V36z" fill="#388E3C" />
          <Path d="M41,25h-7c-0.6,0-1-0.4-1-1v-7c0-0.6,0.4-1,1-1h5.3c0.4,0,0.8,0.3,0.9,0.7l1.7,5.2c0,0.1,0.1,0.2,0.1,0.3V24 C42,24.6,41.6,25,41,25z" fill="#37474F" />
        </G>
      </Svg>
    );
  }

