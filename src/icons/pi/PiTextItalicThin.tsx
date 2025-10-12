

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTextItalicThin = (props: IconProps) => {

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
          <Path  d="M196,56a4,4,0,0,1-4,4H154.88L109.55,196H144a4,4,0,0,1,0,8H64a4,4,0,0,1,0-8h37.12L146.45,60H112a4,4,0,0,1,0-8h80A4,4,0,0,1,196,56Z" />
        </G>
      </Svg>
    );
  }

