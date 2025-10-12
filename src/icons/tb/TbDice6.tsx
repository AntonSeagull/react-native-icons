

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDice6 = (props: IconProps) => {

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
          <Circle  cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <Circle  cx="15.5" cy="7.5" r=".5" fill="currentColor" />
          <Circle  cx="8.5" cy="12" r=".5" fill="currentColor" />
          <Circle  cx="15.5" cy="12" r=".5" fill="currentColor" />
          <Circle  cx="15.5" cy="16.5" r=".5" fill="currentColor" />
          <Circle  cx="8.5" cy="16.5" r=".5" fill="currentColor" />
          <Path  d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
        </G>
      </Svg>
    );
  }

