

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBracketsContain = (props: IconProps) => {

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
          <Path  d="M7 4h-4v16h4" />
          <Path  d="M17 4h4v16h-4" />
          <Path  d="M8 16h.01" />
          <Path  d="M12 16h.01" />
          <Path  d="M16 16h.01" />
        </G>
      </Svg>
    );
  }

