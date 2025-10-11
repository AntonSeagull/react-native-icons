

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaVoteYeaSolid = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 16, 16)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M 8 5 L 8 21 L 24 21 L 24 5 L 8 5 z M 10 7 L 22 7 L 22 19 L 10 19 L 10 7 z M 19.300781 9.9003906 L 15 14.199219 L 12.699219 11.900391 L 11.300781 13.400391 L 14.300781 16.400391 L 15 17.099609 L 15.699219 16.400391 L 20.699219 11.400391 L 19.300781 9.9003906 z M 2 19 L 2 27 L 4 27 L 4 21 L 6 21 L 6 19 L 2 19 z M 26 19 L 26 21 L 28 21 L 28 27 L 30 27 L 30 19 L 26 19 z M 6 23 L 6 25 L 26 25 L 26 23 L 6 23 z" />
        </G>
      </Svg>
    );
  }

