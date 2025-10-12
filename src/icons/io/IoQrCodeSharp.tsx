

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoQrCodeSharp = (props: IconProps) => {

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
          <Path  d="M480,240H272V32H480ZM316,196H436V76H316Z" />
          <Path  d="M240,240H32V32H240ZM76,196H196V76H76Z" />
          <Path  d="M240,480H32V272H240ZM76,436H196V316H76Z" />
        </G>
      </Svg>
    );
  }

