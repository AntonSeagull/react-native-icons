

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcAddRow = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 24, 24)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="#90CAF9" d="M43,30V18c0-2.2-1.8-4-4-4H9c-2.2,0-4,1.8-4,4v12c0,2.2,1.8,4,4,4h30C41.2,34,43,32.2,43,30z M9,18h30v12 L9,30V18z" />
        </G>
      </Svg>
    );
  }

