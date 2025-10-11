

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoSyncSharp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M434.67,285.59v-29.8C434.67,157.06,354.43,77,255.47,77a179,179,0,0,0-140.14,67.36m-38.53,82v29.8C76.8,355,157,435,256,435a180.45,180.45,0,0,0,140-66.92" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

