

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiCollapseVerticalFill = (props: IconProps) => {

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
          <Path  d="M11.9995 13.4995 16.9493 18.4493 12.9995 18.4483 12.9995 22.9995H10.9995L10.9995 18.4478 7.05225 18.4468 11.9995 13.4995ZM10.9995.999512 10.9995 5.54964 7.05029 5.54956 12 10.4995 16.9497 5.54977 12.9995 5.54968V.999512L10.9995.999512Z" />
        </G>
      </Svg>
    );
  }

