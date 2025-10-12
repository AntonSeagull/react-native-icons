

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscGitFetch = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8, 8)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M9 2H8V3H9V2Z" />
          <Path  d="M8.14644 14L3.14645 9.00001L3.85356 8.2929L8 12.4393L8 11L9 11L9 12.4393L13.1464 8.2929L13.8535 9.00001L8.85354 14H8.14644Z" />
          <Path  d="M8 5H9V6H8V5Z" />
          <Path  d="M9 8H8V9H9V8Z" />
        </G>
      </Svg>
    );
  }

