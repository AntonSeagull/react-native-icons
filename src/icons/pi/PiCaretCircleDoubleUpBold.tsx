

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCaretCircleDoubleUpBold = (props: IconProps) => {

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
          <Path  d="M204.4,51.6a108,108,0,1,0,0,152.8A108.16,108.16,0,0,0,204.4,51.6Zm-17,135.82a84,84,0,1,1,0-118.84A84.12,84.12,0,0,1,187.42,187.42ZM168.5,159.53a12,12,0,0,1-17,17L128,153l-23.53,23.53a12,12,0,0,1-17-17l32-32a12,12,0,0,1,17,0Zm0-56a12,12,0,1,1-17,17L128,97l-23.53,23.52a12,12,0,1,1-17-17l32-32a12,12,0,0,1,17,0Z" />
        </G>
      </Svg>
    );
  }

