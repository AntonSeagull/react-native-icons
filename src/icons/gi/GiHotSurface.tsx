

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiHotSurface = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M106 53.5c45 150-45 150 0 300h60c-45-150 45-150 0-300h-60zm120 0c45 150-45 150 0 300h60c-45-150 45-150 0-300h-60zm120 0c45 150-45 150 0 300h60c-45-150 45-150 0-300h-60zm-270 315c-15 0-30 30-30 30-30 0-30 0-30 30v30h480v-30c0-30 0-30-30-30 0 0-15-30-30-30-30 0-30 45-60 45s-30-45-60-45-30 45-60 45-30-45-60-45-30 45-60 45-30-45-60-45z" fill="#000" />
        </G>
      </Svg>
    );
  }

