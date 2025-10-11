

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiCollapseHorizontalLine = (props: IconProps) => {

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
          <Path d="M13.5 12 18.4497 7.05029 19.864 8.46451 17.3284 11H23V13H17.3284L19.8615 15.5331 18.4473 16.9473 13.5 12ZM1 13H6.67084L4.13584 15.535 5.55005 16.9493 10.5 11.9996 5.55025 7.0498 4.13604 8.46402 6.67206 11H1V13Z" />
        </G>
      </Svg>
    );
  }

