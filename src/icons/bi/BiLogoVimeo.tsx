

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiLogoVimeo = (props: IconProps) => {

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
          <Path  d="M21.062 10.414c-2.036 4.349-6.949 10.267-10.054 10.267-3.06 0-3.501-6.527-5.173-10.869-.823-2.138-1.354-1.646-2.896-.567L2 8.031c2.248-1.976 4.499-4.272 5.88-4.399 1.559-.148 2.517.916 2.873 3.193.475 2.994 1.137 7.641 2.291 7.641.9 0 3.117-3.686 3.232-5.004.203-1.93-1.421-1.989-2.828-1.387 2.228-7.295 11.494-5.95 7.614 2.339z" />
        </G>
      </Svg>
    );
  }

