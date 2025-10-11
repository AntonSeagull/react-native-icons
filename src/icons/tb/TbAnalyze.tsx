

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAnalyze = (props: IconProps) => {

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
          <Path  d="M20 11a8.1 8.1 0 0 0 -6.986 -6.918a8.095 8.095 0 0 0 -8.019 3.918" />
          <Path  d="M4 13a8.1 8.1 0 0 0 15 3" />
          <Path  d="M19 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path  d="M5 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path  d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        </G>
      </Svg>
    );
  }

