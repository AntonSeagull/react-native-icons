

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoToggle = (props: IconProps) => {

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
          <Path  d="M368,112H144C64.6,112,0,176.6,0,256S64.6,400,144,400H368c79.4,0,144-64.6,144-144S447.4,112,368,112Zm0,256A112,112,0,1,1,480,256,112.12,112.12,0,0,1,368,368Z" />
        </G>
      </Svg>
    );
  }

