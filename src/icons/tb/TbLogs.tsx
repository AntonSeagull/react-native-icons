

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLogs = (props: IconProps) => {

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
          <Path  d="M4 12h.01" />
          <Path  d="M4 6h.01" />
          <Path  d="M4 18h.01" />
          <Path  d="M8 18h2" />
          <Path  d="M8 12h2" />
          <Path  d="M8 6h2" />
          <Path  d="M14 6h6" />
          <Path  d="M14 12h6" />
          <Path  d="M14 18h6" />
        </G>
      </Svg>
    );
  }

