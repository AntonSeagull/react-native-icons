

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgCornerDoubleLeftUp = (props: IconProps) => {

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
          <Path d="M7.78372 9.25045L6.36951 7.83624L10.6121 3.59363L14.8548 7.83627L13.4406 9.25048L10.6121 6.42205L7.78372 9.25045Z" fill="currentColor" />
          <Path d="M13.4406 13.4932L14.8548 12.0789L10.6121 7.83628L6.36951 12.0789L7.78372 13.4931L9.63052 11.6463V16.4063C9.63052 18.6155 11.4214 20.4063 13.6305 20.4063H17.6305V18.4063H13.6305C12.526 18.4063 11.6305 17.5109 11.6305 16.4063V11.6831L13.4406 13.4932Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

