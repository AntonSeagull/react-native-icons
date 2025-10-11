

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgPentagonLeft = (props: IconProps) => {

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
          <Path d="M16 12L18 7H8L6 12L8 17H18L16 12ZM15.0459 15L13.8459 12L15.0459 9H9.35407L8.15407 12L9.35407 15H15.0459Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

