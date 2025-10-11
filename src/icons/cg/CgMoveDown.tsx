

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgMoveDown = (props: IconProps) => {

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
          <Path d="M7 5H9V13H7V5Z" fill="currentColor" />
          <Path d="M15 5H17V13H15V5Z" fill="currentColor" />
          <Path d="M11.0001 5H13.0001V14.9999H16.0355L12.0356 19.071L8.03564 14.9999H11.0001V5Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

