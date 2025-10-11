

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiDotsSixThin = (props: IconProps) => {

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
          <Path  d="M68,92a8,8,0,1,1-8-8A8,8,0,0,1,68,92Zm60-8a8,8,0,1,0,8,8A8,8,0,0,0,128,84Zm68,16a8,8,0,1,0-8-8A8,8,0,0,0,196,100ZM60,156a8,8,0,1,0,8,8A8,8,0,0,0,60,156Zm68,0a8,8,0,1,0,8,8A8,8,0,0,0,128,156Zm68,0a8,8,0,1,0,8,8A8,8,0,0,0,196,156Z" />
        </G>
      </Svg>
    );
  }

