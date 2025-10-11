

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFunnelSimpleX = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M192,144H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm40-64H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM128,176H104a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Zm93.66-5.66a8,8,0,0,0-11.32,0L192,188.69l-18.34-18.35a8,8,0,0,0-11.32,11.32L180.69,200l-18.35,18.34a8,8,0,0,0,11.32,11.32L192,211.31l18.34,18.35a8,8,0,0,0,11.32-11.32L203.31,200l18.35-18.34A8,8,0,0,0,221.66,170.34Z" />
        </G>
      </Svg>
    );
  }

