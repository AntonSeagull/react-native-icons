

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBracketsContainStart = (props: IconProps) => {

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
          <Path  d="M9 4h-4v16h4" />
          <Path  d="M18 16h-.01" />
          <Path  d="M14 16h-.01" />
          <Path  d="M10 16h-.01" />
        </G>
      </Svg>
    );
  }

