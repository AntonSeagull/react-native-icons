

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowDownLeftFill = (props: IconProps) => {

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
          <Path  d="M197.66,69.66,127.31,140l46.35,46.34A8,8,0,0,1,168,200H64a8,8,0,0,1-8-8V88a8,8,0,0,1,13.66-5.66L116,128.69l70.34-70.35a8,8,0,0,1,11.32,11.32Z" />
        </G>
      </Svg>
    );
  }

