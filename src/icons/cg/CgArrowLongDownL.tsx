

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgArrowLongDownL = (props: IconProps) => {

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
          <Path  d="M8.99801 0.972107V2.97211H11.9983L10.998 2.97299L11.0124 19.2135L9.16751 17.379L7.75726 18.7972L12.0118 23.0279L16.2427 18.7734L14.8246 17.3632L13.0124 19.1856L12.998 2.97211H14.998V0.972107H8.99801Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

