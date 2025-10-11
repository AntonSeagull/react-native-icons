

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgCalibrate = (props: IconProps) => {

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
          <Path  d="M12.0503 5C14.51 5 16.7393 5.98676 18.3638 7.58602L14.1208 11.8291C13.5824 11.3154 12.8531 11 12.0503 11C11.1963 11 10.4256 11.3568 9.87927 11.9295L5.63623 7.68651C7.26871 6.0282 9.53941 5 12.0503 5Z" fill="currentColor" />
          <Path  d="M12.0503 19C13.7071 19 15.0503 17.6569 15.0503 16C15.0503 14.3431 13.7071 13 12.0503 13C10.3934 13 9.05029 14.3431 9.05029 16C9.05029 17.6569 10.3934 19 12.0503 19Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

