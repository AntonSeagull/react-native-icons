

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiRssFill = (props: IconProps) => {

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
          <Path  d="M3 3C12.9411 3 21 11.0589 21 21H18C18 12.7157 11.2843 6 3 6V3ZM3 10C9.07513 10 14 14.9249 14 21H11C11 16.5817 7.41828 13 3 13V10ZM3 17C5.20914 17 7 18.7909 7 21H3V17Z" />
        </G>
      </Svg>
    );
  }

