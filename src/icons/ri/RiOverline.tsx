

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiOverline = (props: IconProps) => {

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
          <Path  d="M15.2459 18H8.75407L7.15407 22H5L11 7H13L19 22H16.8459L15.2459 18ZM14.4459 16L12 9.88516L9.55407 16H14.4459ZM4 3H20V5H4V3Z" />
        </G>
      </Svg>
    );
  }

