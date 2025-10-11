

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgArrowsBreakeV = (props: IconProps) => {

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
          <Path  d="M16.2427 5.24264L14.8285 6.65685L13 4.82839L13.0001 9.24268H17.0001V11.2427H7.00012V9.24268H11.0001L11 4.82846L9.17161 6.65685L7.75739 5.24264L12 1L16.2427 5.24264Z" fill="currentColor" />
          <Path  d="M7 15.2527V13.2527H17V15.2527H13.0001L13 19.6669L14.8284 17.8385L16.2426 19.2527L12 23.4954L7.75732 19.2527L9.17154 17.8385L11 19.667V15.2527L7 15.2527Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

