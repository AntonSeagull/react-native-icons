

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiCheese = (props: IconProps) => {

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
          <Path  d="M15.16 2a1 1 0 0 0-.66.13l-12 7a.64.64 0 0 0-.13.1l-.1.08a1.17 1.17 0 0 0-.17.26.84.84 0 0 0-.1.43v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V10a8.08 8.08 0 0 0-6.84-8zm0 2.05A6.07 6.07 0 0 1 19.93 9H6.7zM20 19H4v-8h16z" />
        </G>
      </Svg>
    );
  }

