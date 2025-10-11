

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TiMediaEject = (props: IconProps) => {

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
          <Path  d="M17 16h-10c-1.104 0-2 .895-2 2 0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2 0-1.105-.896-2-2-2zM18.433 10.604c-2.574-2.641-6.433-6.604-6.433-6.604s-3.859 3.963-6.433 6.604c-.349.363-.567.853-.567 1.396 0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2 0-.543-.218-1.033-.567-1.396z" />
        </G>
      </Svg>
    );
  }

