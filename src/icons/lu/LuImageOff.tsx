

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuImageOff = (props: IconProps) => {

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
          <Line  x1="2" x2="22" y1="2" y2="22" />
          <Line  x1="13.5" x2="6" y1="13.5" y2="21" />
          <Line  x1="18" x2="21" y1="12" y2="15" />
          <Path  d="M10.41 10.41a2 2 0 1 1-2.83-2.83" />
          <Path  d="M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59" />
          <Path  d="M21 15V5a2 2 0 0 0-2-2H9" />
        </G>
      </Svg>
    );
  }

