

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgFormatIndentDecrease = (props: IconProps) => {

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
          <Path d="M20 7H4V5H20V7Z" fill="currentColor" />
          <Path d="M20 11H12V9H20V11Z" fill="currentColor" />
          <Path d="M12 15H20V13H12V15Z" fill="currentColor" />
          <Path d="M9 9L4 12L9 15V9Z" fill="currentColor" />
          <Path d="M4 17V19H20V17H4Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

