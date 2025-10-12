

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiXingLine = (props: IconProps) => {

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
          <Path  d="M20.4443 3.5L13.8099 14.9901L17.8573 22H15.5473L11.5021 14.9914L11.5003 14.9904L18.1343 3.5H20.4443ZM8.31033 7L10.7324 11.1962L10.7305 11.1973L7.66933 16.5H5.36133L8.42215 11.1951L6.00133 7H8.31033Z" />
        </G>
      </Svg>
    );
  }

