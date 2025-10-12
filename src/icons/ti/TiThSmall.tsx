

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TiThSmall = (props: IconProps) => {

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
          <Circle  cx="5" cy="19" r="2.5" />
          <Circle  cx="5" cy="12" r="2.5" />
          <Circle  cx="5" cy="5" r="2.5" />
          <Circle  cx="12" cy="19" r="2.5" />
          <Circle  cx="12" cy="12" r="2.5" />
          <Circle  cx="12" cy="5" r="2.5" />
          <Circle  cx="19" cy="19" r="2.5" />
          <Circle  cx="19" cy="12" r="2.5" />
          <Circle  cx="19" cy="5" r="2.5" />
        </G>
      </Svg>
    );
  }

