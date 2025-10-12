

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiBrightnessUp = (props: IconProps) => {

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
          <Circle  cx="12" cy="3.063" r="1" />
          <Circle  cx="12" cy="20.937" r="1" />
          <Circle  cx="20.937" cy="12" r="1" />
          <Circle  cx="3.063" cy="12" r="1" />
          <Circle  cx="18.319" cy="5.681" r="1" />
          <Circle  cx="5.681" cy="18.319" r="1" />
          <Circle  cx="18.319" cy="18.319" r="1" />
          <Circle  cx="5.681" cy="5.681" r="1" />
          <Path  d="M12,17.5A5.5,5.5,0,1,1,17.5,12,5.506,5.506,0,0,1,12,17.5Zm0-10A4.5,4.5,0,1,0,16.5,12,4.505,4.505,0,0,0,12,7.5Z" />
        </G>
      </Svg>
    );
  }

