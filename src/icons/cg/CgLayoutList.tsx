

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgLayoutList = (props: IconProps) => {

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
          <Path d="M9 7H7V9H9V7Z" fill="currentColor" />
          <Path d="M7 13V11H9V13H7Z" fill="currentColor" />
          <Path d="M7 15V17H9V15H7Z" fill="currentColor" />
          <Path d="M11 15V17H17V15H11Z" fill="currentColor" />
          <Path d="M17 13V11H11V13H17Z" fill="currentColor" />
          <Path d="M17 7V9H11V7H17Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

