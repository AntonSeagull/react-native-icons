

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrUnorderedList = (props: IconProps) => {

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
          <Circle  cx="1.85" cy="7.29" r="1.52" />
          <Circle  cx="1.85" cy="12.58" r="1.52" />
          <Circle  cx="1.85" cy="17.87" r="1.52" />
        </G>
      </Svg>
    );
  }

