

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiHeartMinus = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M372.48 31.215c-77.65 0-116.48 65.73-116.48 65.73s-38.83-65.72-116.48-65.72c-37.14 0-107.77 33.72-107.77 125.13 0 161.24 224.25 324.43 224.25 324.43s224.25-163.19 224.25-324.43c0-91.42-70.63-125.13-107.77-125.14zM146.924 225.65h220v60.7h-220z" />
        </G>
      </Svg>
    );
  }

