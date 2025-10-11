

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgGlass = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M17 10C17 12.419 15.2822 14.4367 13 14.9V17H15V19H9V17H11V14.9C8.71776 14.4367 7 12.419 7 10V5H17V10ZM15 7H9V10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10V7Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

